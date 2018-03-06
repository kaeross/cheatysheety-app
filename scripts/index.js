var possibles = ['css-class','width','full-width','height','background-color','container-background-color','background-url','background-repeat','background-size','border-t/b/l/r','border-radius','border-style','border-width','border-color','padding-t/b/l/r','vertical align','align','text-align','text-decoration','text-transform','font-style','font-weight','font-family','font-size','color','line-height','letter-spacing','href','rel','src','srcset','cellpadding','cellspacing','table-layout','inner-padding','title','direction'];
var descriptions = ['add a css style class to the element', 'set the element width', 'set the element to full width','set the elements height',''];

var result = ['0,1,2,4','2','0,2,4,6,7,8,9,10,14,15,17,36','0,1,4,9,10,15','0,1,4,15','0,1,3,4,5,9,10,14,15,16,17,18,19,20,21,22,23,24,25,27,28,34','0,3,5,14,16,18,19,20,21,22,23,24,25,26','0,1,3,5,9,10,14,16,27,28,29,30,35','0,1,5,11,12,13,14','0,3','0,1,5,14,22,23,24,25,31,32,33'];

document.getElementById('mj').textContent = '';//arr;
let tbl = document.getElementById('list-tab');

let tabSections = ['mjml-container','mjml-wrapper','mjml-section','mjml-column','mjml-group','mjml-button','mjml-text','mjml-image','mjml-divider','mjml-spacer','mjml-table','mjml-raw'];
let tcontent = '';
for (let i = 0; i < tabSections.length; i++) {
   tcontent +=  '<a class="list-group-item list-group-item-action " id="list-'+tabSections[i] +'-list" data-toggle="list" href="#list-'+tabSections[i] +'" role="tab" aria-controls="'+tabSections[i] +'">'+tabSections[i] +'</a>';    
}
let tbans = '';
for (let i = 0; i < tabSections.length; i++) {

tbans += '<div class="tab-pane fade" id="list-'+tabSections[i] +'" role="tabpanel" aria-labelledby="list-'+tabSections[i] +'-list">';
if (i < result.length){
for (let ii = 0; ii < result[i].split(',').length; ii++) {
    let tt = result[i].split(',');
    if( ii === 0){
        tbans += '<table><tbody><tr>'
    }

tbans += '<td>'+ possibles[tt[ii]] +'</td> ';
    if(ii === 2 || ii === 5 || ii === 8 || ii === 11 || ii === 14 || ii === 17 || ii === 20 || ii === 23){
        tbans += '</tr><tr>';
    }

}

tbans += '</tr></tbody></table></div>'
}
document.getElementById('nav-tabContent').innerHTML = tbans;

}
tbl.innerHTML = tcontent;

let els = document.getElementById('list-tab').children;
// <!-- 
// for(let o =0 ; o < els.length; o++){
// els[o].addEventListener('mouseover', function(event){

// for(let o =0 ; o < els.length; o++){
// els[o].classList.remove('active');
// }
// this.classList.add('active');
// console.log(this.classList);

// });
// } -->
