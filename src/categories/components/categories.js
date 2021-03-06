import React from "react";
import Category from "./category";
import "./categories.css";
import Search from "../../widgets/containers/search";
import Media from "../../playlist/components/media";

function Categories(props) {
    return (
        <div className="Categories">
            <Search />
            {
                props.search.map(item => <Media key={item.id}  {...item} />)
            }
            {
                props.categories.map(item => (
                    <Category
                        key={item.id}
                        {...item}
                        handleOpenModal={props.handleOpenModal}
                    />
                ))
            }
        </div>
    );
}

export default Categories;
