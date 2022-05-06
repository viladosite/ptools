function recolherSessao() {
    let parent = document.getElementById('legenda').parentElement;
    let childs = Array.from(parent.children);
    
    childs.forEach(element => {
        element.classList.add('none');
        console.log('ocultando div');
    });
    console.log(parent)
    console.log(childs)
}