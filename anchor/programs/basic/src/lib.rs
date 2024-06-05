use anchor_lang::prelude::*;

declare_id!("44WxRwywPMvxURPqNxBcm3fmYFDucFbTkL3F85FtbcGc");

#[program]
pub mod basic {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
