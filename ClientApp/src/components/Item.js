
const Item = ({ item, drag, itemImgObj }) => {
    console.log("yyy", itemImgObj)
    return (
        <div className="unranked-cell">
            <img id={`item-${item.id}`} src={itemImgObj.image}
                alt ="" style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
            />
        </div>
    )
}
export default Item;