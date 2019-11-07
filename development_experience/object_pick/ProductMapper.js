/**
 * 常量,用来获取属性值的bean类型
 */
export const MAPPER_BEAN = "__bean__";

/**
 * 返回用到的字段
 * @param {Object|Array} data 元数据
 * @param {Class} classType 需要转换的类型，取里面的字段
 */
export const formatMapperData = (data, classType) => {
    if (!classType) return data;
    //    let instance = Object.create(classType.prototype);
    //    classType.call(instance);
    // 上面两行等同于下面的一行
    let instance = Reflect.construct(classType, []);
    if (Array.isArray(data)) {
        return data.map(item => filterField(item, instance));
    } else {
        return filterField(data, instance);
    }
};

/**
 * 返回properties数组中的字段的对象
 * @param {Object} obj 对象数据
 * @param {Object} instance 对象bean空实例
 */
export const filterField = (obj, instance) => {
    const properties = Object.keys(instance);
    // const properties = Object.getOwnPropertyNames(instance);
    let result = Object.create(null);
    properties.forEach(field => {
        // 首先判断对象的属性是否还是个对象，如果是，就获取该属性值类型的方法，再根据类型筛选
        let hasBeanMethod = instance[`${field}${MAPPER_BEAN}`];
        if (hasBeanMethod) {
            result[field] = formatMapperData(obj[field], hasBeanMethod);
        } else result[field] = obj[field];
    });
    return result;
};
