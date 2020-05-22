import React from 'react';
import { withTranslation } from 'react-i18next';
import { SortingState,IntegratedSorting,IntegratedFiltering,SearchState } from '@devexpress/dx-react-grid';
import { Grid,Table,TableHeaderRow,TableFixedColumns,DragDropProvider,TableColumnReordering,Toolbar,SearchPanel } from '@devexpress/dx-react-grid-material-ui';
import { StyledHeaderRow,StyledHeaderCell,StyledFixedColumnCell,StyledPaper } from './langTable.style';
import { langauges } from '../../Const';


function getData(i18n) {
    let keys = [];
    let resources = [];
    langauges.map(lan => {
        const data = i18n.getDataByLanguage(lan);     
        console.log()   
        if(data !==  undefined){
            Object.keys(data.translation).map(key => keys.indexOf(key) < 0 ? keys.push(key) : '');
            resources = {...resources,[lan] : data.translation };
        }
        else{
          resources = {...resources,[lan] : {}};
        }
        return ''      
    });  
    const rows = keys.map(key => {
                    let data = {key};
                    langauges.map(lan => data[lan] = resources[lan][key]  !== undefined ? resources[lan][key] : '' );
                    return data;  
                    });                     
    return rows;
}
  
const headerRow = ({...restProps}) => (
    <StyledHeaderRow      
      {...restProps}
    />
  );

const headerCell = ({...restProps}) => (
    <StyledHeaderCell    
      {...restProps}
    />
  );

const fixedCell = ({...restProps}) => {      
    if(Object.keys(restProps.tableRow).indexOf('row') < 0){
        return <StyledFixedColumnCell {...restProps}/> 
    }    
    return <TableFixedColumns.Cell      
      {...restProps}
    />
};

function LangTable ({i18n}) {    
  const columns = ['key',...langauges].map(col => {return {name : col, title : col}});     
  const rows = getData(i18n);   
  return (
    <StyledPaper elevation={6} data-test='Table-Component' >                                                                                                                            
        <Grid data-test='Grid'
        rows={rows}
        columns={columns}
        >
        <DragDropProvider />
        <SortingState />
        <IntegratedSorting />  
        <SearchState />
        <IntegratedFiltering />   
        <Table />
        <TableColumnReordering defaultOrder={['key',...langauges]} />
        <TableHeaderRow showSortingControls 
          data-test='Header'
          rowComponent={headerRow} 
          cellComponent={headerCell} />
        <Toolbar />
        <SearchPanel />        
        <TableFixedColumns
          data-test='Fixed-Column'
          leftColumns={['key']} 
          cellComponent={fixedCell}         
        />
        </Grid>
    </StyledPaper>
  );
}

export default withTranslation()(LangTable);





