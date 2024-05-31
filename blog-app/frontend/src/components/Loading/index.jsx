import React from 'react'

export default function Loading() {
  return (
    <>
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </>
  )
}
