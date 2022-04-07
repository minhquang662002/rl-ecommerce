export default function findCurrentColor(img, data, list) {
    return data?.color?.findIndex((item) => {
        return item.images.includes(list[img]);
    });
}
