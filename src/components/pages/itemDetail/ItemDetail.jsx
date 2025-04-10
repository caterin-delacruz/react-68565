import { useEffect, useState } from "react";
import Counter from "../../common/counter/Counter";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import "./itemDetail.css";

export const ItemDetail = () => {
    const { id } = useParams();

    const [item, setItem] = useState({});
    useEffect(() => {
        let productCollection = collection(db, "products");

        let refDoc = doc(productCollection, id);
        const getProduct = getDoc(refDoc);
        getProduct.then((res) => {
            setItem({ id: res.id, ...res.data() });
        });
    }, [id]);

    return (
        <div>
            <div className="item-detail-Card">
                <h2>{item.title}</h2>
                <div className="image-container-detail">
                    <img src={item.imageUrl} alt="" className="product-image-detail" />
                </div>
                <h4>{item.description}</h4>
                <Counter item={item} />
            </div>
        </div>
    );
};

