export const Show = ({ info }) => {
    console.log(info);
    return (
        <div>
            <ul>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PHONE</th>
                        </tr>
                    </thead>
                    <tbody>


                        {info.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                </tr>

                            );
                        })}


                    </tbody>
                </table>
            </ul>
        </div>

    );
};
