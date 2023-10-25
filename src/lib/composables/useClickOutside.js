import { useEffect } from 'react';

function useClickOutside(ref, callback) {
    useEffect(() => {
        function handleClickOutside(event) {

            console.log("-> event.target.className", event.target);
            if (ref.current && !ref.current.contains(event.target) && event.target.className !== 'multi-select-label' && event.target.type !== 'checkbox' && event.target.className !== 'multi-select-field-options') {
                callback();
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref, callback]);
}
export default useClickOutside;
