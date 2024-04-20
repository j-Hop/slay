import { createSelector } from "@reduxjs/toolkit";

export const selectNannys = state => state.nannies.nannies;
export const selectLoading = state => state.nannies.loading;
export const selectFavorites = state => state.favorites.favorites;
export const selectFilter = state => state.filter.filters; 

export const getNannyFiltered = createSelector(
    [selectFilter, selectNannys],
    (filters, nannies) => {
        const {select} =filters;
    
    const resetAll = select === 'A to Z';

    if (resetAll) {
        return nannies;
    }


    return nannies.filter(nanni => {
const existFilters = 
select.includes('A to Z') || nanni.select.includes(nanni.select);
      
return existFilters; 
    });
    }
);