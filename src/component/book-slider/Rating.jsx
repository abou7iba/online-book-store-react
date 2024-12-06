const Rating = ({rating, reviews}) => {
  return (
    <div className="rating">
     {rating >= 1 ? <i class="fa-solid fa-star"></i> : rating >= 0.5 ? <i class="fa-solid fa-star-half-stroke"></i> : <i class="fa-regular fa-star"></i>}
     {rating >= 2 ? <i class="fa-solid fa-star"></i> : rating >= 1.5 ? <i class="fa-solid fa-star-half-stroke"></i> : <i class="fa-regular fa-star"></i>}
     {rating >= 3 ? <i class="fa-solid fa-star"></i> : rating >= 2.5 ? <i class="fa-solid fa-star-half-stroke"></i> : <i class="fa-regular fa-star"></i>}
     {rating >= 4 ? <i class="fa-solid fa-star"></i> : rating >= 3.5 ? <i class="fa-solid fa-star-half-stroke"></i> : <i class="fa-regular fa-star"></i>}
     {rating >= 5 ? <i class="fa-solid fa-star"></i> : rating >= 4.5 ? <i class="fa-solid fa-star-half-stroke"></i> : <i class="fa-regular fa-star"></i>}
     <span> ({reviews})</span>
   
    </div>
  );
};

export default Rating;
