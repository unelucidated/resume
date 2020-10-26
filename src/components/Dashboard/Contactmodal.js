import React, { useRef, useEffect } from 'react';

const Contactmodal = (props) => {
    const node = useRef();

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            //inside click
            return;
        }
        //outside click
        props.setModal();
    };

    useEffect(() => {
        //add when mounted
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <div className={`modal ${props.active && 'is-active'}`} onClick={handleClickOutside} >
            <div className="modal-background"></div>
            <div className="modal-card" ref={node}>
                <header class="modal-card-head">
                    <p class="modal-card-title">Contact Me</p>
                    <button class="delete " aria-label="close" onClick={props.setModal}></button>
                </header>
                <section class="modal-card-body">
                    <div className="container py-4 has-text-black">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae architecto nihil ex commodi ratione quo soluta dignissimos rerum libero sint, amet facilis necessitatibus natus ipsa, ut reiciendis itaque ea alias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt tenetur culpa nulla nobis nemo voluptas. Molestiae doloremque quisquam aperiam quidem, reiciendis, obcaecati impedit hic ducimus expedita deleniti neque totam incidunt reprehenderit tempora facere voluptates tenetur sit ratione ut, ipsum suscipit possimus quis eum fuga. Enim vero libero est perspiciatis repellendus.
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" onClick={props.setModal}>Close</button>
                </footer>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={props.setModal}></button>
        </div>
    );
}

export default Contactmodal;