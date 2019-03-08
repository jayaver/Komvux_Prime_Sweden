$(() => {

    const products = [
        {
          id: 1,
          title: 'Toys',
          picture:'photos/lego.jpg',
          desc:'Lego Architecture',
          price: 1600
        },
        {
          id: 2,
          title: 'Toys',
          picture:'photos/toycar.jpg',
          desc:'Toy Car',
          price: 600
        },
        {
            id: 2,
            title: 'Phones',
            picture:'photos/tpytrain.jpg',
            desc:'Toy Train',
            price: 100
          }
        
      ];
    
     
        
      // a function with two parameters, "array here will euqal the array above, we make "array here to make it more dynamic to write 
     const appendList = (array) => {
     // item is going to be whatever inside the array, id is the index of the array. 
     /* the  array.map (function(value, index, array) {
         return 
     }); */ // map function is to capture each item in the array and index and the entire array
     
     // for loop can work here too! 
     // 
        const template = array.map((item, id) => {
     return `
             <li class="product col-3">
             <img src="${item.picture}" alt="${item.title}">
             <div class="product-content">
             <h5>${item.desc} <small>${item.price}kr</small></h4>
             </div>
             <button class="button"  id="${item.id}">Add to Cart</button>
             </li>
             `; 
        });
     
         //template is the whole code above from return
        $('.product-list').html(template);
     }
     
     // call function appendList with arguments (products);
     appendList(products);
      
     let cartarray = [];
    
      let cartlist = document.querySelector('.cartlist');
        // ADD TO CART
      function addToCart(shop){
            let li = document.createElement('li');
            li.innerHTML = `${shop.desc} - ${shop.price}kr - <button class="crossbtn">X</button>`;
            cartlist.appendChild(li);                 
      }
    
      
    
      function removeItem(cartarray, deleteitem){
          cartarray.splice(deleteitem, 1);
      }
    
      
      $('.button').on('click', function(e){
        let btnid = $(this).attr('id');
        // console.log(+btnid);
        products.forEach(function(items){
            if(+btnid === items.id){
                addToCart(items);
                cartarray.push(items);
            }
        });
        $('.itemsnum').text(cartarray.length); 
      });
    
      $('.cartlist').on('click', 'button', function(e){
          $(this).closest('li').remove();
          removeItem(cartarray);
          $('.itemsnum').text(cartarray.length); 
      });
    })