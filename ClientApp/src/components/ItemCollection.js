import Item from './Item';

const ItemCollection = ({ items, drag, imgArr }) => {
    
    console.log("iii", items);
    console.log("zzz", imgArr);

    return (
        <div className="items-not-ranked">
            {
                items.map((item) => (item.ranking === 0)
                    ? <Item key={`item-${item.id}`} item={item} drag={drag}
                        itemImgObj={imgArr.find(o => o.Id === item.imageId)} />
                    : null)
            }
        </div>
    )
}
export default ItemCollection;