import formatPrice from "./formatPrice";

const formatDiscount = (price, discountPercent) => {
    return formatPrice(price / 100 * (100 - discountPercent));
}

export default formatDiscount;