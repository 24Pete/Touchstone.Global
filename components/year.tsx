function year() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <span className="pr-14 pt-10 pb-10 text-[18px] font-light text-white">© {year} Touchstone</span>
        </>
  )
}

export default year;