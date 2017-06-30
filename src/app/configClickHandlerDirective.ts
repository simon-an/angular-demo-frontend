import { Input } from '@angular/core';
import { Directive, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
    selector: '[storeMenuItemClickHandler]'
})
export class ConfigClickHandlerDirective {

    @Output() myClick: EventEmitter<any> = new EventEmitter();
    @Input() callBack: () => void;
    @Input() callBack2: EventEmitter<string>;
    @Input() onBeforeAddingProcessor: (value: any) => boolean;
    @HostListener('click', ['$event'])
    private renderer: Renderer2;
    onClick(e: MouseEvent): void {
        console.log('called', this.callBack2);
        console.log('onBeforeAddingProcessor', this.onBeforeAddingProcessor);
        const isValid = this.onBeforeAddingProcessor('test');
        console.log('onBeforeAddingProcessor.result', isValid);
        console.log('onBeforeAddingProcessor.result', this.onBeforeAddingProcessor('x'));
        // if (e) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // } else {
        this.myClick.next([e, this.renderer, this.callBack]);
        this.callBack();
        // }
    }
    constructor(renderer: Renderer2) {
        this.renderer = renderer;
        // el.nativeElement.style.backgroundColor = 'yellow';
    }
}
