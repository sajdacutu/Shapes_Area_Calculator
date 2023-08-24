
const pi = 3.14;

const switchFunction = () => {
    const choice = document.getElementById("menu").value;
    switch(choice){
        case '1' : display(areaSquare());
        break; 
        case '2' : display(areaRectangle());
        break;
        case '3': display(areaCircle());
        break;
        case '4': display(areaSphere());
        break;

    }

    
}

const areaSquare = () =>{
    let side = prompt("Enter the side of a Square : ");
    if (side === ''){
        return "You haven't provided any valid Input.";
    }
    return "Area of Square = " +  4*side + "cm2";
}
const  areaRectangle = () =>{
    let length = prompt("Enter the length of a Rectangle : ");
    let breadth = prompt("Enter the breadth of a Rectangle : ");
    if (length === '' ||  breadth === ''){
        return "You haven't provided any valid Input.";
    }
    return "The Area of rectangle = " + length*breadth + "cm2";
}
const areaCircle = () =>{
    let radius = prompt("Enter the Radius of a Circle : ");
    if (radius === ''){
        return "You haven't provided any valid Input.";
    }
    return "The Area of Circle = " + pi*radius*radius + "cm2";
}
const areaSphere = () =>{
    let radius = prompt("Enter the Radius of a Sphere : ");
    if (radius === ''){
        return "You haven't provided any valid Input.";
    }
    return "The Area of Sphere = " + 4*pi*radius*radius + "cm2";
}

const display = (area) => {
    const output = document.getElementById("output");

    output.innerHTML = `<p>${area}</p>`;
}
