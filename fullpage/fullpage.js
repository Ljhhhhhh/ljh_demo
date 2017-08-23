(function ($) {
    var privateFun=function () {
        //私有
    }
    var fullPage=(function () {
        function fullPage(elemt,options) {
         this.settins=$.extend(true,$.fn.fullPage.default,options||{});
         this.element=elemt;
         this.init();
        }
        fullPage.prototype={
            init:function () {
                var me=this;
            },
            pageCount:function () {

            },
            pageLength:function () {
                
            },
            _initLayout:function () {
                
            },
            _initPaging:function () {
                
            },
            _initEvent:function () {
                
            }
        }
        return fullPage;
    })();
    $.fn.fullPage=function (options) {
        return this.each(function () {
            var me =$(this),
                instance=me.data("fullPage");
            if(!instance){
                instance= new fullPage(me,options);
                me.data("fullPage",instance);
            }
            if($.type(options)==="string") return instance[options]();

        })
    }
    $.fn.fullPage.default={
        selectors:{
            sections:".articles",
            section:"article",
            page:".pages",
            active:".active"
        },
        index:0,
        easing:"ease",
        duration:500,
        loop:false,
        pagination:true,
        keyboard:true,
        direction:"vertical",
        callback:""
    }
    $(function () {
        $("[data-fullPage]").fullPage();
    })
})(jQuery);