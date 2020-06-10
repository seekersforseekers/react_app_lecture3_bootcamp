import React from 'react';
function Holder(props){
    return(
        <div>
<h2> I m practsing react function"{props.time}</h2>
<h3 > My Name is"{props.name}</h3>
<h4 > This is"{props.subject}</h4>
</div>
    );

}
export default Holder;