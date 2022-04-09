
// default export
// can be imported with any name while using
// another file
const List = (props) => {
    //console.log(props);
    // below cannot be done, as props are immutable
    // props.heading = "list changed";
    return (
        <>
            <h1>{props.heading}</h1>
            <li>{props.i1}</li>
            <li>{props.i2}</li>
            <li>{props.i3}</li>
            <li>{props.i4}</li>
        </>
    )
}
export default List;








// named export
// has to be imported with same name as
// the name here 
// export const List2 = () => {
//     return <h1>List2</h1>
// }