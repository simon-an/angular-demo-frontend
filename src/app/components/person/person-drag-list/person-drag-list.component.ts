import 'rxjs/add/observable/merge';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import { DataSource } from '@angular/cdk';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { MdIcon, MdIconRegistry, MdPaginator, MdSort } from '@angular/material';

@Component({
    selector: 'knowledge-person-drag-list',
    templateUrl: 'person-drag-list.component.html',
    styleUrls: ['./person-drag-list.component.css']
})

export class PersonDragListComponent implements OnInit {

    displayedColumns: Array<string> = ['addIcon', 'userId', 'userName', 'progress', 'color'];
    exampleDatabase: ExampleDatabase = new ExampleDatabase();
    dataSource: ExampleDataSource | null;
    @ViewChild(MdPaginator) paginator: MdPaginator;
    @ViewChild('filter') filter: ElementRef;
    @ViewChild(MdSort) sort: MdSort;

    @Output() addPersonEvent: EventEmitter<string> = new EventEmitter();

    public addPerson(id: string): void {
        console.log('adding user: ', id);
        this.addPersonEvent.emit(id);
    }

    constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'cartman',
            sanitizer.bypassSecurityTrustResourceUrl('assets/svg/cartman.svg'));
    }

    ngOnInit(): void {
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<Array<UserData>> = new BehaviorSubject<Array<UserData>>([]);
    get data(): Array<UserData> { return this.dataChange.value; }

    constructor() {
        // Fill up the database with 100 users.
        for (let i = 0; i < 100; i++) { this.addUser(); }
    }

    /** Adds a new user to the database. */
    addUser() {
        const copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    }

    /** Builds and returns a new User. */
    private createNewUser() {
        const name =
            NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

        return {
            id: (this.data.length + 1).toString(),
            name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator, private _sort: MdSort) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Array<UserData>> {
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._paginator.page,
            this._filterChange,
            this._sort.mdSortChange
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            const data = this.getSortedData().filter((item: UserData) => {
                const searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });

            // Grab the page's slice of data.
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);

        });
    }

    /** Returns a sorted copy of the database data. */
    getSortedData(): Array<UserData> {
        const data = this._exampleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction === '') { return data; }

        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch (this._sort.active) {
                case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;
                case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;
                case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;
                case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }

    disconnect(): void { }
}
