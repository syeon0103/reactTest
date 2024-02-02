import classes from './Modal.module.css';


//  아무대나 눌러도 계속 close 됐던 이유 : div onclick 이벤트 </div>가 전체 화면에 다 영향을 받아서
// </div> 대신 </>로 끝내니 정상 동작함

function Modal({children, onClose}) {
    return (
        <>
    <div className={classes.backdrop} onClick={onClose}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>
    );
}

export default Modal;