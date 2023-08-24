"use client"
import { IconBrandGithub, IconBrandMeta, IconBrandX } from '@tabler/icons-react'
import React from 'react'

export default function Login() {

   function handleModal() {
      my_modal_1.showModal()
   }

   return (
      <>
         <a className="btn btn-info btn-sm capitalize" onClick={handleModal}>Login</a>
         <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
               <div className="flex justify-between mb-3 px-1">
                  <h3 className="font-bold text-2xl">Login</h3>
                  <p className='my-auto text-sm'>{'<'}Beta 0.1{'>'}</p>
               </div>
               <div className="form-control w-full mb-3">
                  <label htmlFor="" className='label'>Username</label>
                  <input type="text" className="input input-info" placeholder='Your username...' />
               </div>
               <div className="form-control w-full mb-3">
                  <label htmlFor="" className='label'>Password</label>
                  <input type="password" className="input input-info" placeholder='Your password...' />
               </div>
               <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-2">
                     <input type="checkbox" className="checkbox checkbox-info" />
                     <span className="label-text">Remember me</span>
                  </label>
               </div>
               <div className="flex gap-2 justify-end">
                  <button className="btn btn-sm">Close</button>
                  <button typeof='submit' className="btn btn-info btn-sm">Login</button>
               </div>
               <hr className='border-neutral my-2' />
               <p className='text-center'>OR</p>
               <div className="flex justify-center gap-2 my-2">
                  <button className='btn btn-sm bg-slate-800 hover:bg-slate-700 capitalize text-white'><IconBrandGithub size={20}/> Github</button>
                  <button className='btn btn-sm bg-blue-700 hover:bg-blue-600 capitalize text-white'><IconBrandMeta size={20}/> Meta</button>
                  <button className='btn btn-sm bg-black hover:bg-gray-900 capitalize text-white'><IconBrandX size={20}/> Twitter</button>
               </div>
               <hr className='border-neutral my-2' />
               <p>Belum punya akun? <span className='text-info cursor-pointer'>Daftar</span></p>
               <p>Lupa Password? <span className='text-info cursor-pointer'>Klik</span></p>
            </form>
         </dialog>
      </>
   )
}
