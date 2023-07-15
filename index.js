

var _ServicesContainer = document.getElementById('ServicesContainer');

for (let i = 0; i < 6; i++) {   
    var _icon = 'briefcase';    
    if (i == 1){
        _icon = 'map'
    }
    if (i == 2){
        _icon = 'envelope' 
    }
    var content = `
    <div class="icon"><i class="bi bi-${_icon}"></i></div>
    <h4 class="title"><a href="">Lorem Ipsum ${i}</a></h4>
    <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>`;
    
    let _div = document.createElement('div');
    _div.innerHTML = content;
    _div.className= 'col-lg-4 col-md-6 icon-box';
    _ServicesContainer.appendChild(_div);
}