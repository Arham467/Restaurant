import React, { useEffect, useReducer } from "react";
import Context from "./Context";
import { reducer } from "./reducer";
import dish from "../assets/Food/dish.png";
import dish2 from "../assets/Food/dish2.png";
import dish3 from "../assets/Food/dish3.png";
import dish4 from "../assets/Food/dish4.png";
import f1 from "../assets/Food/f1.png";
import f2 from "../assets/Food/f2.png";
import f3 from "../assets/Food/f3.png";
import f4 from "../assets/Food/f4.png";
import f5 from "../assets/Food/f5.png";
import f6 from "../assets/Food/f6.png";
import f7 from "../assets/Food/f7.png";
import f8 from "../assets/Food/f8.png";
import f9 from "../assets/Food/f9.png";
import f10 from "../assets/Food/f10.png";
import f11 from "../assets/Food/f11.png";
import f12 from "../assets/Food/f12.png";
import f13 from "../assets/Food/f13.png";
import f14 from "../assets/Food/f14.png";
import f15 from "../assets/Food/f15.png";
import f16 from "../assets/Food/f16.png";
import f17 from "../assets/Food/f17.png";
import f18 from "../assets/Food/f18.png";
import f19 from "../assets/Food/f19.png";
import f20 from "../assets/Food/f20.png";
import ft1_1 from "../assets/thums/ft1_1.png";
import ft1_2 from "../assets/thums/ft1_2.png";
import ft1_3 from "../assets/thums/ft1_3.png";
import ft2_1 from "../assets/thums/ft2_1.png";
import ft2_2 from "../assets/thums/ft2_2.png";
import ft2_3 from "../assets/thums/ft2_3.png";
import ft3_1 from "../assets/thums/ft3_1.png";
import ft3_2 from "../assets/thums/ft3_2.png";
import ft3_3 from "../assets/thums/ft3_3.png";
import ft4_1 from "../assets/thums/ft4_1.png";
import ft4_2 from "../assets/thums/ft4_2.png";
import ft4_3 from "../assets/thums/ft4_3.png";
import ft5_1 from "../assets/thums/ft5_1.png";
import ft5_2 from "../assets/thums/ft5_2.png";
import ft5_3 from "../assets/thums/ft5_3.png";
import ft6_1 from "../assets/thums/ft6_1.png";
import ft6_2 from "../assets/thums/ft6_2.png";
import ft6_3 from "../assets/thums/ft6_3.png";
import ft7_1 from "../assets/thums/ft7_1.png";
import ft7_2 from "../assets/thums/ft7_2.png";
import ft7_3 from "../assets/thums/ft7_3.png";
import ft8_1 from "../assets/thums/ft8_1.png";
import ft8_2 from "../assets/thums/ft8_2.png";
import ft8_3 from "../assets/thums/ft8_3.png";
import ft9_1 from "../assets/thums/ft9_1.png";
import ft9_2 from "../assets/thums/ft9_2.png";
import ft9_3 from "../assets/thums/ft9_3.png";
import ft10_1 from "../assets/thums/ft10_1.png";
import ft10_2 from "../assets/thums/ft10_2.png";
import ft10_3 from "../assets/thums/ft10_3.png";
import ft11_1 from "../assets/thums/ft11_1.png";
import ft11_2 from "../assets/thums/ft11_2.png";
import ft11_3 from "../assets/thums/ft11_3.png";
import ft12_1 from "../assets/thums/ft12_1.png";
import ft12_2 from "../assets/thums/ft12_2.png";
import ft12_3 from "../assets/thums/ft12_3.png";
import ft13_1 from "../assets/thums/ft13_1.png";
import ft13_2 from "../assets/thums/ft13_2.png";
import ft13_3 from "../assets/thums/ft13_3.png";
import ft14_1 from "../assets/thums/ft14_1.png";
import ft14_2 from "../assets/thums/ft14_2.png";
import ft14_3 from "../assets/thums/ft14_3.png";

const getLOcalStore = () => {
  const localsotreData = localStorage.getItem("FoodList");
  if (!localsotreData) {
    return [];
  } else {
    return JSON.parse(localsotreData);
  }
};

const FvgetLOcalStore = () => {
  const localsotreData = localStorage.getItem("FvList");
  if (!localsotreData) {
    return [];
  } else {
    return JSON.parse(localsotreData);
  }
};

const lovegetLOcalStore = () => {
  const localsotreData = localStorage.getItem("lovelist");
  if (!localsotreData) {
    return [];
  } else {
    return JSON.parse(localsotreData);
  }
};

const dltsProduct = () => {
  const localsotreData = localStorage.getItem("productdetails");
  if (!localsotreData) {
    return [];
  } else {
    return JSON.parse(localsotreData);
  }

};


const inisialState = {
  FoodBank: [],
  filtterFood: [],
  thums: [],
  featureFood: [],
  favouriteFood: FvgetLOcalStore(),
  popUp: false,
  popUpCart: [],
  cart: getLOcalStore(),
  love: lovegetLOcalStore(),
  ddCart: false,
  totalQuantity: 0,
  totalFv: 0,
  checkOut: dltsProduct(),
  Blog_D: [],
  toast: false,
  toastMessage: "order was add to cart"
};

const ContextState = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, inisialState);

  const api = [
    {
      id: 1,
      name: "Chicken And Salad",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 3.6,
      image: dish3,
      category: "Main Dishes",
      thums: [dish3, ft1_1, ft1_2],
      feature: true,
    },
    {
      id: 2,
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 3.5,
      image: f10,
      category: "Main Dishes",
      thums: [f10, ft1_3, ft2_1],
      feature: false,
    },
    {
      id: 3,
      name: "Omlet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.5,
      image: f9,
      category: "Breakfast",
      thums: [f9, ft2_2, ft2_3],
      feature: false,
    },
    {
      id: 4,
      name: "Grill",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 4.2,
      image: dish2,
      category: "Main Dishes",
      thums: [dish2, ft3_1, ft3_2],
      feature: true,
    },
    {
      id: 5,
      name: "Ramen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 2.3,
      image: f13,
      category: "Breakfast",
      thums: [f13, ft3_3, ft4_1],
      feature: false,
    },
    {
      id: 6,
      name: "Sallat",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.4,
      image: f7,
      category: "Breakfast",
      thums: [f7, ft4_2, ft4_3],
      feature: false,
    },
    {
      id: 7,
      name: "Omlet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.5,
      image: dish4,
      category: "Breakfast",
      thums: [dish4, ft5_1, ft5_2],
      feature: true,
    },
    {
      id: 8,
      name: "Butter Chicken Taco",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.15,
      image: f1,
      category: "Breakfast",
      thums: [f1, ft5_3, ft6_1],
      feature: false,
    },
    {
      id: 9,
      name: "Chicken Burger",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.15,
      image: f2,
      category: "Main Dishes",
      thums: [f2, ft6_2, ft6_3],
      feature: false,
    },
    {
      id: 10,
      name: "Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.15,
      image: f3,
      category: "Desserts",
      thums: [f3, ft7_1, ft7_2],
      feature: false,
    },
    {
      id: 11,
      name: "Fries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.5,
      image: f4,
      category: "Main Dishes",
      thums: [f4, ft7_3, ft8_1],
      feature: false,
    },
    {
      id: 12,
      name: "sandwich",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.5,
      image: f5,
      category: "Main Dishes",
      thums: [f5, ft8_2, ft8_3],
      feature: false,
    },
    {
      id: 13,
      name: "Main Dishes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 5.2,
      image: dish,
      category: "Main Dishes",
      thums: [dish, ft9_1, ft9_2],
      feature: true,
    },
    {
      id: 14,
      name: "Pastry",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 5.2,
      image: f11,
      category: "Desserts",
      thums: [f11, ft9_3, ft10_1],
      feature: false,
    },
    {
      id: 15,
      name: "Pan Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 4.3,
      image: f12,
      category: "Desserts",
      thums: [f12, ft10_2, ft10_3],
      feature: false,
    },
    {
      id: 16,
      name: "Burger",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.5,
      image: f6,
      category: "Breakfast",
      thums: [f6, ft11_1, ft11_2],
      feature: false,
    },
    {
      id: 17,
      name: "lemon juice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 4.3,
      image: f14,
      category: "Drinks",
      thums: [f14, ft11_3, ft12_1],
      feature: false,
    },
    {
      id: 18,
      name: "Juice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 2.4,
      image: f15,
      category: "Drinks",
      thums: [f15, ft12_2, ft12_3],
      feature: false,
    },
    {
      id: 19,
      name: "Burger",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.9,
      image: f16,
      category: "Main Dishes",
      thums: [f16, ft13_1, ft13_2],
      feature: false,
    },
    {
      id: 20,
      name: "French Fries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 3.4,
      image: f17,
      category: "Main Dishes",
      thums: [f17, ft13_3, ft14_1],
      feature: false,
    },
    {
      id: 21,
      name: "French Fries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 3.4,
      image: f18,
      category: "Main Dishes",
      thums: [f18, ft14_2, ft14_3],
      feature: false,
    },
    {
      id: 22,
      name: "Desserts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 3.4,
      image: f19,
      category: "Desserts",
      thums: [],
      feature: false,
    },
    {
      id: 23,
      name: "Pen cake",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 3.4,
      image: f20,
      category: "Desserts",
      thums: [],
      feature: false,
    },
    {
      id: 24,
      name: "Roll",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.",
      price: 1.8,
      image: f8,
      category: "Breakfast",
      thums: [],
      feature: false,
    },
  ];

  useEffect(() => {
    dispatch({
      type: "data",
      payload: api,
    });
  }, []);

  // category part start
  const activeCategory = (el) => {
    dispatch({
      type: "category",
      payload: el,
    });
  };
  // category part end

  // AddcartPopUp part Start
  const AddcartPopUp = (id) => {
    dispatch({
      type: "popUp",
      payload: id,
    });
  };
  // AddcartPopUp part end

  // addToCart part start
  const addToCart = (id, quantity, Variation) => {
    dispatch({
      type: "addToCart",
      payload: { id, quantity, Variation }
    });

    setTimeout(() => {
      dispatch({
        type: "removeToast"
      })
    }, 2000)
  };
  // addToCart part end

  //   add to wishlist
  const addToWish = (id) => {
    dispatch({
      type: "addToWish",
      payload: id,
    });
  };

  // Close part start
  const Close = () => {
    dispatch({
      type: "Close",
    });
  };

  // Close part end

  // removeCart part start
  const removeCart = (id) => {
    dispatch({
      type: "removeCart",
      payload: id,
    });

    setTimeout(() => {
      dispatch({
        type: "removeToast"
      })
    }, 2000)
  };
  // removeCart part end

  // removeCart part start
  const removeWish = (id) => {
    dispatch({
      type: "removeWish",
      payload: id,
    });
  };
  // removeCart part end

  //FoodList localsotre start
  useEffect(() => {
    localStorage.setItem("FoodList", JSON.stringify(state.cart));
  }, [state.cart]);
  //FoodList localsotre end


  //productdetails localsotre start
  useEffect(() => {
    localStorage.setItem("productdetails", JSON.stringify(state.checkOut));
  }, [state.checkOut]);
  //productdetails localsotre end

  // fv localsotre start
  useEffect(() => {
    localStorage.setItem("FvList", JSON.stringify(state.favouriteFood));
  }, [state.favouriteFood]);
  // fv localsotre end

  // fv localsotre start
  useEffect(() => {
    localStorage.setItem("lovelist", JSON.stringify(state.love));
  }, [state.love]);
  // fv localsotre end

  // decrement start
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
  };
  // decrement end

  // ToQuantity  And  TotalAmount 
  useEffect(() => {
    dispatch({ type: "totalQuantity" })
  }, [state.cart])

  useEffect(() => {
    dispatch({ type: "totalFv" })
  }, [state.love])
  // ToQuantity  And  TotalAmount 


  // CartDropDown start
  const CartDropDown = () => {
    dispatch({
      type: "CartDropDown"
    })
  }
  // CartDropDown end


  // CloseCart start
  const CloseCart = () => {
    dispatch({
      type: "CloseCart"
    })
  }
  // CloseCart end

  // handleCheckout start
  const handleCheckout = (id, quantity, Variation) => {
    dispatch({
      type: "handleCheckout",
      payload: { id, quantity, Variation }
    })
  }

  // handleCheckout end


  // searchFilter start
  const searchFilter = (value) => {
    dispatch({
      type: "searchFilter",
      payload: value,
    });
  };
  // searchFilter end


  // addBlogDetails start
  const addBlogDetails = (id) => {
    dispatch({
      type: "addBlogDetails",
      payload: id,
    });
  };
  // addBlogDetails end

  // handlePlaceOrder start
  const handlePlaceOrder = (id) => {
    dispatch({
      type: "handlePlaceOrder",
    });
    setTimeout(() => {
      dispatch({
        type: "removeToast"
      })
    }, 2000)
  };
  // handlePlaceOrder end

  // fvActiv start
  const fvDeActiv = (id) => {
    dispatch({
      type: "fvDeActiv",
    });

    setTimeout(() => {
      dispatch({
        type: "removeToast"
      })
    }, 2000)
  };
  // fvDeActiv end

  // fvActiv start
  const fvActiv = (id) => {
    dispatch({
      type: "fvActiv",
    });

    setTimeout(() => {
      dispatch({
        type: "removeToast"
      })
    }, 2000)
  };
  // fvActiv end


  return (
    <Context.Provider
      value={{
        ...state,
        AddcartPopUp,
        addToCart,
        activeCategory,
        Close,
        removeCart,
        addToWish,
        removeWish,
        CartDropDown,
        CloseCart,
        handleCheckout,
        searchFilter,
        addBlogDetails,
        handlePlaceOrder,
        fvDeActiv,
        fvActiv
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextState