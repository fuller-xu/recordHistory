import { MAPPER_BEAN } from "../ProductMapper.js";
import Sku from "./SkuBean.js";

/**
 * 用到的字段
 */

class Product {
  // 如果有Babel，就可以直接使用
  //   id ;
  //   name ;
  //   discountPrice ;
  //   imgs ;
  //   bbSkus ;

  // 否则使用es6，标准用法
  constructor(id, name, discountPrice, imgs, bbSkus) {
    this.id = id;
    this.name = name;
    this.discountPrice = discountPrice;
    this.imgs = imgs;
    this.bbSkus = bbSkus;
  }

  // 如果有属性是对象或是数组，必须提供返回属性值类型的方法（如果数组中的元素是js基本类型的除外）
  get [`bbSkus${MAPPER_BEAN}`]() {
    return Sku;
  }
}

export default Product;
