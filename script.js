let products = {
    data: [
        {
            ProjectGroupID: "23",
            MetroAreaID: "1007",
            ProjectName: "Edgewater",
            ProductID:"980",
            ProductName:"The Davis",
            image:"https://webuildonyourlot.com/wp-content/uploads/2018/05/NVA_GW_TheLandon_ModelHome_Photography-65-400x267.jpg"
        },
        {
            ProjectGroupID: "23",
            MetroAreaID: "1007",
            ProjectName: "Edgewater",
            ProductID:"E15",
            ProductName:"The Amelia",
            image:"https://webuildonyourlot.com/wp-content/uploads/2021/12/NVA_RWO_JocelynModelHome_Photos-15-3228x2355-1-600x438.jpg"
        },
        {
            ProjectGroupID: "23",
            MetroAreaID: "1007",
            ProjectName: "Edgewater",
            ProductID:"Y54",
            ProductName:"The Lockwood",
            image:"https://webuildonyourlot.com/wp-content/uploads/2020/08/The-Lowell-00126-D-elevcomp-600x375.jpg"
        },
        {
            ProjectGroupID: "23",
            MetroAreaID: "1007",
            ProjectName: "Edgewater",
            ProductID:"Y58",
            ProductName:"The Prescott",
            image:"https://webuildonyourlot.com/wp-content/uploads/2020/08/The-Lowell-00126-D-elevcomp-600x375.jpg"
        },
        {
            ProjectGroupID: "25",
            MetroAreaID: "1007",
            ProjectName: "Inwood",
            ProductID:"1562",
            ProductName:"The Dupree",
            image:"https://webuildonyourlot.com/wp-content/uploads/2017/03/McKenney-Model-Feature-2018-600x399.jpg"
        },
        {
            ProjectGroupID: "41",
            MetroAreaID: "1008",
            ProjectName: "Estuary at Bowen Village",
            ProductID:"1601",
            ProductName:"The Stono",
            image:"https://webuildonyourlot.com/wp-content/uploads/2018/05/Russell-Exterior-600x309.jpg"
        },
        {
            ProjectGroupID: "41",
            MetroAreaID: "1008",
            ProjectName: "Estuary at Bowen Village",
            ProductID:"U68",
            ProductName:"The Moultrie",
            image:"https://webuildonyourlot.com/wp-content/uploads/2021/05/SMC-20103-White-Oaks-Scarlett-B-2209-HR-600x388.jpg"
        },
        {
            ProjectGroupID: "41",
            MetroAreaID: "1008",
            ProjectName: "Estuary at Bowen Village",
            ProductID:"U68",
            ProductName:"The Moultrie",
            image:"https://webuildonyourlot.com/wp-content/uploads/2021/05/SMC-20103-White-Oaks-Scarlett-B-2209-HR-600x388.jpg"
        },
        {
            ProjectGroupID: "41",
            MetroAreaID: "1008",
            ProjectName: "Estuary at Bowen Village",
            ProductID:"U68",
            ProductName:"The Moultrie",
            image:"https://webuildonyourlot.com/wp-content/uploads/2021/05/SMC-20103-White-Oaks-Scarlett-B-2209-HR-600x388.jpg"
        },
        {
            ProjectGroupID: "43",
            MetroAreaID: "1008",
            ProjectName: "Mixson",
            ProductID:"1674",
            ProductName:"The Stella",
            image:"https://webuildonyourlot.com/wp-content/uploads/2019/09/NOV_QS_Emma_MIR_Elevation-C_Exterior4-e1529432669611-400x266.jpg"
        },
        {
            ProjectGroupID: "43",
            MetroAreaID: "1008",
            ProjectName: "old",
            ProductID:"1674",
            ProductName:"The Stella",
            image:"https://webuildonyourlot.com/wp-content/uploads/2019/09/NOV_QS_Emma_MIR_Elevation-C_Exterior4-e1529432669611-400x266.jpg"
        },
        {
          ProjectGroupID: "47",
          MetroAreaID: "1008",
          ProjectName: "Oldfield",
          ProductID: "NULL",
          ProductName: "NULL"
      }
    ],
  };
  function createProductCard(i) {
    let card = document.createElement("div");
    card.classList.add("card");
  
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
  
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let container = document.createElement("div");
    container.classList.add("container");
  
    let name = document.createElement("h5");
    name.classList.add("ProductName");
    if (i.ProductName.toUpperCase() == "NULL") {
      name.innerText = "";
    } else {
      name.innerText = i.ProductName.toUpperCase();
    }
    container.appendChild(name);
  
    let pID = document.createElement("h5");
    pID.classList.add("ProductID");
    if (i.ProductID.toUpperCase() == "NULL") {
      pID.innerText = "";
    } else {
      pID.innerText = i.ProductID.toUpperCase();
    }
    container.appendChild(pID);
  
    let mID = document.createElement("h5");
    mID.classList.add("MetroAreaID");
    if (i.MetroAreaID.toUpperCase() == "NULL") {
      mID.innerText = "";
    } else {
      mID.innerText = i.MetroAreaID.toUpperCase();
    }
    container.appendChild(mID);
  
    let pName = document.createElement("h5");
    pName.classList.add("ProjectName");
    if (i.ProjectName.toUpperCase() == "NULL") {
      pName.innerText = "";
    } else {
      pName.innerText = i.ProjectName.toUpperCase();
    }
    container.appendChild(pName);
  
    let pgID = document.createElement("h5");
    pgID.classList.add("ProjectGroupID");
    if (i.ProjectGroupID.toUpperCase() == "NULL") {
      pgID.innerText = "";
    } else {
      pgID.innerText = i.ProjectGroupID.toUpperCase();
    }
    container.appendChild(pgID);
  
    card.appendChild(container);
  
    return card;
  }

  document.getElementById("search").addEventListener("click", () => {

    let searchInput = document.getElementById("search-input").value;
    if(!searchInput) {
        console.log("empty")
        document.getElementById("check").classList.remove("hide")
        return;
    } else {
        document.getElementById("check").classList.add("hide")
    }
    let noElementsFound = true;
    let cardsFound = [];
    const productsval = document.getElementById("products");
    productsval.remove();
   
  const productElement = document.createElement("div");
  productElement.setAttribute("id","products");
  const wrapperElement = document.getElementsByClassName("wrapper")[0];
  wrapperElement.appendChild(productElement);

    for (let i of products.data) {
      const productExists = i.ProjectName.toUpperCase().includes(searchInput.toUpperCase());
      console.log(productExists)
      if (productExists) {
        let productCard = createProductCard(i);
        cardsFound.push(productCard);
        document.getElementById("products").appendChild(productCard);
        noElementsFound = false;
      }
    }
    if(noElementsFound) {
        document.getElementById("Noelements").classList.remove("hide")
    } else {
        document.getElementById("Noelements").classList.add("hide")
    }
    
});
  