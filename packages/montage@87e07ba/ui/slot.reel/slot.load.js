montageDefine("87e07ba","ui/slot.reel/slot",{dependencies:["montage","ui/component"],factory:function(e,t){var n=(e("montage").Montage,e("ui/component").Component);t.Slot=n.specialize({hasTemplate:{enumerable:!1,value:!1},constructor:{value:function(){this.super(),this.content=null}},delegate:{value:null},_content:{value:null},enterDocument:{value:function(e){e&&this.element.classList.add("montage-Slot")}},content:{get:function(){return this._content},set:function(e){var t,i;e&&e.needsDraw!==void 0?(i=this._content,i&&i.needsDraw!==void 0&&i.detachFromParentComponent(),e.element?t=e.element:(t=document.createElement("div"),t.id="appendDiv",this.delegate&&"function"==typeof this.delegate.slotElementForComponent&&(t=this.delegate.slotElementForComponent(this,e,t)),e.element=t),Object.getPropertyDescriptor(n,"domContent").set.call(this,t),this.addChildComponent(e),e.needsDraw=!0):Object.getPropertyDescriptor(n,"domContent").set.call(this,e),this._content=e,this.needsDraw=!0}},contentDidChange:{value:function(e,t){this.delegate&&"function"==typeof this.delegate.slotDidSwitchContent&&this.delegate.slotDidSwitchContent(this,e,e?e.component:null,t,t?t.component:null)}}})}});