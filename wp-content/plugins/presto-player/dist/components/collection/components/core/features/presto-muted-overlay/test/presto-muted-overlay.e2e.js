import{newE2EPage}from"@stencil/core/testing";describe("presto-muted-overlay",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<presto-muted-overlay></presto-muted-overlay>");const t=await e.find("presto-muted-overlay");expect(t).toHaveClass("hydrated")}))}));