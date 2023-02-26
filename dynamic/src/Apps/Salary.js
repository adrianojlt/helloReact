
import React from 'react';

const Salary = () => {
    return (
        <div className='container'>

            <div className='py-4 text-center'>
                <h3>Salary</h3>
                <p className="lead">Page to calculate salary</p>
            </div>

            <div className='row col-12 g-5'>

                {Paycheck()}
                {Diff()}
                {Paycheck()}
            </div>

        </div>
    );
}

const Paycheck = () => { 
    return (
        <div class="col-4">
        </div>
    );
}

const Diff = () => { 

}


export default Salary;