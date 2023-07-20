import React, { useState } from 'react'

const Count = () => {

    const [contador, setContador] = useState(0);
    return (
    <div class="position-relative m-1 p-0.5 text-bg-secondary border border-secondary rounded-4 rounded-circle d-flex justify-content-center h-75 fs-6 d-inline-block">
        <h4 class="fs-5" className='Contador'>{contador}</h4>
    </div>
    )
}

export default Count
