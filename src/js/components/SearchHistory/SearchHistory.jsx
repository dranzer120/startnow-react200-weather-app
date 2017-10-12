import React from 'react';


export default class SearchHistory extends React.Component {
 
render() {

    const { historyList } = this.props;

    return (
        
      <div className='card border-primary'>
        <div className='card-header text-white bg-primary'>Search History</div>
        <div className='card-body'>
        </div>
         <table className='table table-sm table-hover'>
              <tbody>
                  {
                    historyList.map((list,index) => (
                        <tr key={index}>  
                        <td style={{ width:100}}>{ list.name }</td>
                        <td style={{ fontSize:12, textAlign:"right" }}>{ list.date } <br/> { list.time }</td>
                        </tr>
                    ))
                  }
              </tbody> 
            </table>

      </div>
    );
  }
}