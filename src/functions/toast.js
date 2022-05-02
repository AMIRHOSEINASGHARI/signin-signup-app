import { toast } from 'react-toastify';

const notify = (type , text) => {
    if(type === 'success') {
        toast.success(text)
    }else if(type === 'error') {
        toast.error(text)
    }
}

export default notify;