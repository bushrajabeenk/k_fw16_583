import {v4 as uuid} from 'uuid';

// default export
// can be imported with any name while using
// another file


const List = ({heading, info}) => {
    //console.log(props);
    // below cannot be done, as props are immutable
    // props.heading = "list changed";
    return (
        <>
            <h1>{heading}</h1>
            <div>
                {
                    info.map((el) => {
                        return <li key={uuid()} >{el}</li>
                    })
                }
            </div>
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