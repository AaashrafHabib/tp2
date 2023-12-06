import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: 'input[appArcEnciel]'
})
export class ArcEncielDirective {

  color_tab=[
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ]
  constructor() { }
  @HostBinding('style.borderColor')bc ='red';
  @HostBinding('style.color')color ='white';

  @HostListener('keyup') changebc() {
      const i =Math.floor(Math.random()*(this.color_tab.length -1))
      this.bc=this.color_tab[i];
      console.log("border color :",this.bc);

      const j =Math.floor(Math.random()*(this.color_tab.length -1))
      this.color=this.color_tab[j];
      console.log("font color :",this.color);
    }
}

