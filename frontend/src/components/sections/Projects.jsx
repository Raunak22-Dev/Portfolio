import Tilt from 'react-parallax-tilt';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-[2rem] font-bold text-on-surface mb-3 md:mb-4">Featured Projects</h2>
            <p className="text-on-surface-variant text-base md:text-lg">A collection of my academic and personal technical projects.</p>
          </div>
          <a href="/projects" className="group flex items-center text-primary font-bold gap-2 text-sm md:text-base bg-primary/10 px-6 py-3 rounded-full hover:bg-primary/20 transition-colors">
            See More
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Project 1 */}
          <div className="md:col-span-8 group cursor-pointer w-full h-full">
            <Tilt glareEnable={true} glareMaxOpacity={0.1} glareColor="#ba9eff" scale={1.02} transitionSpeed={400} className="w-full h-full">
            <div className="relative aspect-auto md:aspect-video h-[300px] md:h-full rounded-xl overflow-hidden bg-surface-variant relative shadow-xl border border-outline-variant/10">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuQe614YCBFNX8oJirTSSlN9ANcFVVVA4mQwPAGODRN6_OrgvsPg1AeaAizoWMWnb0nmcsfuhg9k3jN2GaAouDXdsykDG0hUjFUhl5oSWVV7EQCQt0Aso25D4aLBZzUx2TwP3V7HHBsZ-QLjdIb-23JG-2igQQ0tqYSWbeg4Hug-y5PW8DBc9HYos4HhAMC787SIs7TFrAnjw0qu0CQN_kJA1w54L3Rp4vsgKPu_D2LNmTc-sUVVcAkUI7OjEesB0ilqPHDdsbN1s" alt="Project 1"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-label-md text-secondary font-label mb-1 md:mb-2 uppercase tracking-widest text-[10px] md:text-xs">FULL-STACK APP</span>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface font-headline">Task Management Platform</h3>
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container text-xs md:text-sm font-bold rounded-lg hover:scale-105 transition-transform">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-outline-variant text-on-surface text-xs md:text-sm font-bold rounded-lg hover:bg-surface-variant/50 transition-colors">Live Demo</a>
                </div>
              </div>
            </div>
            </Tilt>
          </div>
          {/* Project 2 */}
          <div className="md:col-span-4 group cursor-pointer w-full h-full">
            <Tilt glareEnable={true} glareMaxOpacity={0.1} glareColor="#ba9eff" scale={1.02} transitionSpeed={400} className="w-full h-full">
            <div className="relative h-[300px] md:h-full aspect-auto rounded-xl overflow-hidden bg-surface-variant shadow-xl border border-outline-variant/10">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtAq21gWO7UB0xw2Hlm7Fw9hzwH__GHQgzG7ltAdQoWeUHE4MdwO2sTrKxKcvQL4xbVgUNHEyNo_xiGeQixYmy1oxvUebm1lBl2Mwyej0DDr3b2xN2lDay4uepTJfIzvUJAWlO1MPA0ZFXbQKkGa5LWxcvRaDTxPHtcLDImbeB27T1Sox_VQOoG_AsQ-0fvCSXMglFKwK1ngb-ABR_bt6jlILeWyInHv3AaP8dwY6pJm2BjD4iLBOs1yEEuDag7vfVr2eC6geiQKI" alt="Project 2"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-label-md text-tertiary font-label mb-1 md:mb-2 uppercase tracking-widest text-[10px] md:text-xs">MACHINE LEARNING</span>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface font-headline">Predictive Model</h3>
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container text-xs md:text-sm font-bold rounded-lg hover:scale-105 transition-transform">GitHub</a>
                </div>
              </div>
            </div>
            </Tilt>
          </div>
          {/* Project 3 */}
          <div className="md:col-span-4 group cursor-pointer w-full h-full">
            <Tilt glareEnable={true} glareMaxOpacity={0.1} glareColor="#ba9eff" scale={1.02} transitionSpeed={400} className="w-full h-full">
            <div className="relative h-[300px] md:h-full aspect-auto rounded-xl overflow-hidden bg-surface-variant shadow-xl border border-outline-variant/10">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzsLhul0JQke6kjYlehbFPfSJ8JCrcnR6rLBvplatgHZkK-Tx6CHY16I7OnKnmd02mSa7bP7MmMVhItR7iyGPXujhOrG7DrgsdJCmDKAb35Rz9FQZSx4ot26cb6xL9s4b_yEmGyGLOxkBSLhXW6Hxtk5glhhZExVhDOoznteMZcPs1DtwV5rVTPy9eUUaT2vUCExbjrZnvgNm1ttU8IFlJP5jBN0N8N4tTMNzFo-KdFptldLJZCvIoViQ46rDH6BU9sWRM1Ks7g28" alt="Project 3"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-label-md text-primary font-label mb-1 md:mb-2 uppercase tracking-widest text-[10px] md:text-xs">API INTEGRATION</span>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface font-headline">Weather Dashboard</h3>
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container text-xs md:text-sm font-bold rounded-lg hover:scale-105 transition-transform">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-outline-variant text-on-surface text-xs md:text-sm font-bold rounded-lg hover:bg-surface-variant/50 transition-colors">Live Demo</a>
                </div>
              </div>
            </div>
            </Tilt>
          </div>
          {/* Project 4 */}
          <div className="md:col-span-8 group cursor-pointer w-full h-full">
            <Tilt glareEnable={true} glareMaxOpacity={0.1} glareColor="#ba9eff" scale={1.02} transitionSpeed={400} className="w-full h-full">
            <div className="relative aspect-auto md:aspect-video h-[300px] md:h-full rounded-xl overflow-hidden bg-surface-variant shadow-xl border border-outline-variant/10">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI34kEo8VFLWn3IXOQM9fOF6u1L-sP7tOgI8Wg9vEsqMFToJLHGixR_jARG4Ly6fVEJ_y1h2IW9l-wUyCkGMQeblkGuYJJ7y8u8vImIiYpRZ1S_uE3eP5JWPES_cqs6Uf_pUBoRCuvO3iYgl1OPRVwPsbMo41I2T4qiYyhF0_JQ8F9QD7rvaaiMeatwhR3d_knghcv-D2DXXTLtohT1zQrZYsR2QJymXtetVTO_-XbTyjjcLFK2SSgcPVKcFMYUw8abUom_yNEwu8" alt="Project 4"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-label-md text-secondary font-label mb-1 md:mb-2 uppercase tracking-widest text-[10px] md:text-xs">DATA VISUALIZATION</span>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface font-headline">Analytics Tracker</h3>
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary-container text-xs md:text-sm font-bold rounded-lg hover:scale-105 transition-transform">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-outline-variant text-on-surface text-xs md:text-sm font-bold rounded-lg hover:bg-surface-variant/50 transition-colors">Live Demo</a>
                </div>
              </div>
            </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}
