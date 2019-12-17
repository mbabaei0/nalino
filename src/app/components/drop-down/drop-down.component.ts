import { Component, OnInit, forwardRef, Input, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from "@angular/forms";

@Component({
    selector: "app-drop-down",
    templateUrl: "./drop-down.component.html",
    styleUrls: ["./drop-down.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropDownComponent),
            multi: true
        }
        ,
        {
            provide: NG_VALIDATORS,
            useExisting: DropDownComponent,
            multi: true
          }
    ]
})
export class DropDownComponent implements ControlValueAccessor {
    @Input() placeholder;
    @Output() output;
    

    disabled = false;
    // tslint:disable-next-line: member-ordering
    list = [
        { id: 1, title: "tehran" },
        { id: 2, title: "zanjan" },
        { id: 3, title: "esfa" },
        { id: 4, title: "guilan" }
    ];
    open = false;
    value = {id:1,title:'ostan'};
    @Input()set chooseById(id){
        this.list.forEach(x =>{
            if(id === x.id){
                this.value.title = x.title
            }
        })
    };
    constructor() {}

    // ngOnInit() {}
    fOut() {
        setTimeout(() => {
            this.open = false;
        }, 500);
    }
    chooseOption(item) {
        // this.value = {...item};
       // console.log(item);
        this.value = item;
        this.onChange(item.id);
        this.onTouch(item.id);
        this.output = {...item};
        //console.log(this.value);
        this.open = false;
    }
    validate({ value }: FormControl) {
        const isNotValid = this.output !== null;
        return isNotValid && {
          invalid: true
        }
      }
    
    // set val(val){  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    //     this.value = val
    //     this.onChange(val)
    //     this.onTouch(val)
    //     }

    // onChange = (val) => {
    //     console.log(val,'on change')
    // };
    // onTouch = (val) => {
    //     console.log(val,'on change')
    // };
    // writeValue(): void {
    //     this.onChange(this.value);
    // }
    // registerOnChange(fn: (val:any) => void): void {
    //     console.log(fn,'dffdd')
    //     this.onChange = fn;
    // }
    // registerOnTouched(fn: () => void): void {
    //     this.onTouch = fn;
    // }

    // // Allows Angular to disable the input.
    // setDisabledState(isDisabled: boolean): void {
    //     this.disabled = isDisabled;
    // }

    onChange: any = () => {};
    onTouch: any = () => {};
    get val():any {
        return this.value.title;
      }
    
    set val(val) {
        console.log('injaaaaaaaaaaa', val)
        // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
        this.value = val;
        this.list.forEach(x =>{
            if(x.title == val){
                this.onChange(x.id);
                this.onTouch(x.id);
            }
        })
       
    }

    // this method sets the value programmatically
    writeValue(value: any) {
        this.value = value;
    }
    // upon UI element value changes, this method gets triggered
    registerOnChange(fn: any) {
        this.onChange = fn;
    }
    // upon touching the element, this method gets triggered
    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }
}
