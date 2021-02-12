let nav = false;

const handleClick = () => {
    const menuLinks=document.querySelector(".menuLinks");
    console.log(menuLinks);

    if(nav) {

        menuLinks.style.cssText="right:0%; transition:all 0.5s;"
        nav=!nav;
    }else{

    menuLinks.style.cssText="right:-100%; transition:all 0.5s;"
    nav=!nav;
    }
}