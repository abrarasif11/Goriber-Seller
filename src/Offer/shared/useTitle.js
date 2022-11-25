import  { useEffect } from 'react';

const useTitle = title => {
    return (
        useEffect(() =>{
            document.title = `${title} - Goriber Seller`
        },[title])
    );
};

export default useTitle;