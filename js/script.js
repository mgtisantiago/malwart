class Categoria {

    clave;
    nombre;

    constructor(argumentos = []) {
        this.clave = argumentos['clave'];
        this.nombre = argumentos['nombre'];
    }

    static objetos() {
        let categorias = [
            {
                clave: 1,
                nombre: "Martes de Frescura"
            },
            {
                clave: 2,
                nombre: "Navidad"
            }
        ];
        let aCategoria = [];
        let array = [];
        categorias.forEach((element) => {
            let objeto = new Categoria(element);
            array = Object.entries(objeto);
            aCategoria.push(Object.fromEntries(array));
        });
        return aCategoria;
    }
}

class Producto {

    clave;
    precio;
    descuento;
    precioFinal;
    nombre;
    categoria;

    constructor(argumentos = []) {
        this.clave = argumentos['clave'];
        this.precio = argumentos['precio'];
        this.descuento = argumentos['descuento'];
        this.precioFinal = argumentos['precioFinal'];
        this.nombre = argumentos['nombre'];
        this.categoria = argumentos['categoria'];
    }

    static objetos() {
        let productos = [
            {
                clave: 1,
                precio: 60,
                descuento: 10,
                precio_final: 0,
                nombre: "Manzana Gala",
                categoria: 1
            },

            {
                clave: 2,
                precio: 1,
                descuento: 0,
                precio_final: 0,
                nombre: "Platano Chiapas",
                categoria: 1
            },


            {
                clave: 5,
                precio: 4500,
                descuento: 1000,
                precio_final: 0,
                nombre: "Apple Watch SE GPS",
                categoria: 2
            },

            {
                clave: 6,
                precio: 3500,
                descuento: 700,
                precio_final: 0,
                nombre: "One Plus Nord N200",
                categoria: 2
            },


        ];
        let aProductos = [];
        let array = [];
        productos.forEach((element) => {
            if (element.descuento > 0) {
                element.precioFinal = element.precio - element.descuento;
            }
            else {
                element.precioFinal = element.precio;
            }
            let objeto = new Producto(element);
            array = Object.entries(objeto);
            aProductos.push(Object.fromEntries(array));
        });
        return aProductos;
    }
}

let total=0;

class Carrito {

    clave;
    precio;
    descuento;
    precioFinal;
    nombre;
  
    constructor(argumentos = []) {
        this.clave = argumentos['clave'];
        this.precio = argumentos['precio'];
        this.descuento = argumentos['descuento'];
        this.precioFinal = argumentos['precioFinal'];
        this.nombre = argumentos['nombre'];
    }

    static compra(productos,clave) {
        let aCarrito = [];
        let array = [];
       
        productos.forEach((element) => {
            if(element.clave==clave){
                total +=parseFloat(element.precioFinal);
            }
            let objeto = new Carrito(element);
            array = Object.entries(objeto);
            aCarrito.push(Object.fromEntries(array));
        });
        return aCarrito;
    }
}

let productos = document.getElementById("productos");
let procat;
let listpro;
let claveImg = 0;
const formatoMoneda = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
});

OCategorias = Categoria.objetos();
OProductos = Producto.objetos();

OCategorias.forEach((cat) => {
    let liscat = `
        <div class="container my-5">
            <header class="mb-4">
                <h3>${cat.nombre}</h3>
            </header>
        <div class="row">`;
    listpro = "";
    claveImg = 1;
    OProductos.forEach((pro) => {
        if (pro.categoria == cat.clave) {
            procat = `
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="card my-2 shadow-0">
                        <input type="hidden" id="claveProducto" value="${pro.clave}">
                        <a href="#" class="img-wrap">
                            ${pro.descuento > 0 ?
                    `<div class="mask" style="height: 50px;">
                                        <div class="d-flex justify-content-start align-items-start h-100 m-2">
                                            <h6><span class="badge bg-success pt-2">Oferta</span></h6>
                                        </div>
                                    </div>` : ``
                }
                        <img src="img/c${cat.clave}-${claveImg++}.png" class="card-img-top img-fluid">
                        </a>
                        <div class="card-body p-0 pt-3">
                            <div class="d-flex">
                                <h5 class="card-title me-2">${formatoMoneda.format(pro.precioFinal)}/kg</h5>
                                ${pro.descuento > 0 ?
                    `<p class="text-muted text-decoration-line-through ">${formatoMoneda.format(pro.precio)}/kg
                                    </p>`: `<p>&nbsp;</p>`
                }
                            </div>
                            ${pro.descuento > 0 ?
                    `<span class="badge badge-success py-2">Ahorra ${formatoMoneda.format(pro.descuento)}
                                </span>` : `<span>&nbsp;</span>`
                }
                            <p class="card-text mb-0">${pro.nombre}</p>
                            <p id="btnAgregar-${pro.clave}">
                                <a href="javascript:agregar(${pro.clave})" class="btn btn-primary btn-lg btn-rounded px-3 my-3 pt-2 float-start icon-hover">
                                    <i class="fas fa-plus fa-sm px-1 text-light"></i> Agregar
                                </a>
                            </p>
                        </div>
                    </div>
                </div>`;
            listpro += procat;
        }

    });
    productos.innerHTML += liscat + listpro;
});


function agregar(clave) {
    let carrito = document.getElementById("carrito");
    OCompra = Carrito.compra(OProductos,clave);

     
   
   
    
    let listCarrito = `<h5 class="card-title me-2">${total}</h5>`
    carrito.innerHTML = listCarrito;

    let toggleAgregar = document.getElementById("btnAgregar-"+clave)
    toggleAgregar.innerHTML = "";
    let botones =`
    <div class="input-group w-50 mt-2 text-center align-items-center">
    <a class="btn btn-primary btn-lg btn-rounded px-3 my-3 pt-2 float-start icon-hover ripple-surface-dark">
      <i class="fas fa-plus fa-sm px-1 text-light"></i> 
    </a>
    <input type="number" class="form-control btn-lg btn-rounded px-3 my-3 pt-2 float-start icon-hover text-center" value="1"/>
    <a class="btn btn-primary btn-lg btn-rounded px-3 my-3 pt-2 float-start icon-hover ripple-surface-dark">
      <i class="fas fa-minus fa-sm px-1 text-light"></i> 
    </a>
  </div>`
  toggleAgregar.innerHTML = botones;

}

