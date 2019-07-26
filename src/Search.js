import React, {useState, useEffect} from "react";

const Search = () => {
    const [Comments, setComments] = useState([]);
    const [InputValue, setInputValue] = useState('');
    const [FilteredComments, setFilteredComments] = useState([]);
    const [Dropdown, setDropdown] = useState(false);
    const [SearchComments, setSearchComments] = useState([]);

    function fetchData() {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(comments => {
                setComments(comments);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);


    const handleChange = (event) => {
        let inputValue = event.target.value;
        setInputValue(inputValue);
        setFilteredComments(
            Comments.filter(comment => comment.email.toLowerCase().startsWith(
                inputValue.toLowerCase()))
        );
        setDropdown(true);
    };

    const onClickSearch = () => {
        setDropdown(false);
        setSearchComments(
            Comments.filter(comment => comment.email.toLowerCase() === InputValue.toLowerCase())
        );
    };

    const selectEmail = (event) => {
        let inputValue = event.target.textContent;
        setInputValue(inputValue);
        setDropdown(false);
    };

    return (
        <div className="search container">
            <h2>Search</h2>
            <input type='text' value={InputValue} onChange={handleChange}/>
            <button onClick={onClickSearch}>SEARCH</button>
                {(FilteredComments.length && Dropdown) ?
            <ul className="autocomplete-results">
                {FilteredComments.map(comment =>
                    <li key={comment.id} className='li-result' onClick={selectEmail}>{comment.email}</li>
                )}
            </ul>
                :null}
            <h3><u>Search Results</u></h3>
            {(SearchComments.length) ?
                <ul className="search-results">
                    {SearchComments.map(comment =>
                        <li key={comment.id} className='li-search'>
                            <div><b>postId: </b>{comment.postId}</div>
                            <div><b>name: </b>{comment.name}</div>
                            <div><b>email: </b>{comment.email}</div>
                            <div><b>body: </b>{comment.body}</div>
                        </li>
                    )}
                </ul>
                : <div>No Comments</div>
            }
        </div>
    )

}

export default Search;