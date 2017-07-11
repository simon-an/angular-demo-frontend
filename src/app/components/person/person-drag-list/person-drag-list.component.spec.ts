import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { UserService } from 'app/services/user.service';
import { PersonDragListComponent } from './person-drag-list.component';
import { MaterialModule } from '@angular/material';
import { MyOwnCustomMaterialModule } from '../../../app.module';
import { CdkTableModule } from '@angular/cdk';

describe('a person-drag-list component', () => {
	let component: PersonDragListComponent;
	let fixture: ComponentFixture<PersonDragListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PersonDragListComponent],
			imports: [MaterialModule, CdkTableModule, NoopAnimationsModule
			],
			providers: [UserService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PersonDragListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
}); 
