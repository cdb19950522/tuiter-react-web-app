import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                    <div class="col-10">
                        <div class="position-relative">
                            <input type="text"
                                   class="ps-5 form-control rounded-pill"
                                   id="search-tuiter"
                                   placeholder="Search Twitter">
                            <i class="position-absolute wd-search-tuiter fa-sharp fa-solid fa-magnifying-glass"></i>



                        </div>
                    </div>
                    <div class="col-2 pt-1">
                        <i class="fa-solid fa-gear text-primary align-content-center fa-2x"></i>
                    </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                 <li class="nav-item">
                                <a class="nav-link active" href="../for-you.html">For You</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../trending.html">Trending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../news.html">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../sports.html" >Sports</a>
                            </li>
                            <li class="d-sm-none d-none d-md-block d-lg-block d-xl-block d-xxl-block nav-item">
                                <a class="nav-link" href="../entertainment.html" >Entertainment</a>
                            </li>
           </ul>
           <!-- image with overlaid text -->
                <div class="position-relative pt-2 ms-1 me-1">
                    <img src="../../images/spaceX.jpg" style="width: 100%">
                    <h1 class="position-absolute text-white bottom-0 left-0">SpaceX's StarShip</h1>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

