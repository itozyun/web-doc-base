# Color

<style>
    .DeskTop {
        padding             : 1em 0;
        -webkit-column-span : all;
           -moz-column-span : all;
                column-span : all;
    }
    .Window, .Window__inactive {
        float      : left;
        border     : 3px solid;
        width      : 10em;
        max-width  : 98%;
        margin     : 1%;
        padding    : 0 0 1em;
        word-break : break-all;
        word-wrap  : break-word;
    }
        .Window__inactive {
            margin-right : -2em;
            margin-top  : 2em;
        }
    .WindowCaption {
        text-align : center;
        border-top : 3px solid;
        padding    : .25em 0;
    }
    .Window button, .Window__inactive button {
        border : 3px solid;
    }
</style>

<div class="DeskTop box" style="background:Background">

<div class="Window__inactive" style="background:Window; border-color:InactiveBorder; color:WindowText">
<div class="WindowCaption" style="background:InactiveCaption; border-color:InactiveBorder; color:InactiveCaptionText">
InactiveWindow
</div>
background:Window;border-color:InactiveBorder;color:<span style="color:GrayText">WindowText</span>
<button style="background:ButtonFace; border-color:ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight ; color:ButtonText">Button</button>
</div>

<div class="Window" style="background:Window; border-color:ActiveBorder; color:WindowText">
<div class="WindowCaption" style="background:ActiveCaption; border-color:ActiveBorder; color:CaptionText">
WindowCaption
</div>
background:Window;border-color:<span style="background:Highlight; color:HighlightText">WindowFrame;</span>color:<span style="color:GrayText">WindowText</span>
<button style="background:ButtonFace; border-color:ButtonHighlight ButtonShadow ButtonShadow ButtonHighlight ; color:ButtonText">Button</button>
</div>
</div>
<br clear=all>

