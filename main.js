var breath = 0;
var beats = 0;
var thoughts = 0;

function breathe(){
    breath++;
    console.log(breath);
    $('.breaths').html(breath);
}
