import React from 'react';

function PaginationComponent({ currentPage, newsPerPage, totalnews, refreshPage }) {
    const totalPages = Math.ceil(totalnews / newsPerPage);
    const maxVisiblePages = 4;
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const visiblePages = [];
    if (totalPages <= maxVisiblePages) {
        visiblePages.push(...pages);
    } else {
        const start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const end = Math.min(totalPages, start + maxVisiblePages - 1);

        if (start > 1) {
            visiblePages.push(1, '...');  // birinci sayfadan sonra '...'
        }

        visiblePages.push(...pages.slice(start - 1, end));

        if (end < totalPages) {
            visiblePages.push('...', totalPages);  // son  sayfadan sonra '...'
        }
    }

    return (
        <div className="pagination">
            {visiblePages.map((page) => (
                <a
                    key={page}
                    href={page === '...' ? '#' : `/news/${page}`}
                    onClick={page === '...' ? null : refreshPage}
                    className={currentPage === page ? 'page-active' : ''}
                >
                    {page}
                </a>
            ))}
        </div>
    );
}

export default PaginationComponent;
