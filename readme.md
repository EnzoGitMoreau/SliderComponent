<h1>Slider Component for blazor use</h1>

This Slider component allows the user to dynamically resize two divs at the same time by moving a vertical bar.

The setup for the component is shown in Example.Razor

\<SliderComponent FirstId="div1's id" SecondId="div2's id" SliderId="div1's id-div2's id">

SliderId is not automatically set to allow you to customize the component and it's behavior if needed. 
This component will have update that will bring new customizations and possibilities. Any feedback is welcome.

Include js/SlidersHandler.js before loading the component.

You can have as much Sliders as you want, as long as they do not share the exact same divs. 
The SlidersHandler.js is common to all the Sliders and hence must be loaded before any of them. The file is extremly small and won't impact the peformance of your application by any means. 

I also built horizontal sliders to resize a single div that is available on my github and that can be used alongisde these ones.

