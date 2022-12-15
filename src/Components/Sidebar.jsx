const Sidebar = (props) => {


    return ( 
        <table>
            <thead>
                <tr>
                    <th>Collections</th>
                </tr>
            </thead>

            <tbody>
                {props.Ccontainer.map((collection)=>{
                    return(
                        <tr>
                            <td>
                            {collection.id} {collection.title}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        
     );
}
export default Sidebar;