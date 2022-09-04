import  { useEffect} from 'react'

const HeaderLogic = () => {
    const toggleMnue = () => {
        const mnue = document.getElementById("mnue");
        const closeMnue = document.getElementById("close");

        mnue.onclick = () => {

            mnue.classList.remove("active");
            closeMnue.classList.add("active");

        };

        closeMnue.onclick = () => {

            mnue.classList.add("active");
            closeMnue.classList.remove("active");

        }

    };
    useEffect(() => {
        toggleMnue();
    }, [])
}

export default HeaderLogic
