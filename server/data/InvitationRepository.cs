﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.data
{
    public class InvitationRepository : IInvitationRepository
    {
        private readonly DataContext _context;

        public InvitationRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Invitation> Add(Invitation invitation)
        {
            await _context.Invitations.AddAsync(invitation);
            await _context.SaveChangesAsync();
            return invitation;
        }

        public async Task<bool> InvitationExist(int organizationId, int userId)
        {
            if (await _context.Invitations.AnyAsync(x => x.OrganizationId == organizationId && x.UserId == userId))
            {
                return true;
            }
            return false;
        }

        public bool Delete(Invitation invitation)
        {
            try
            {
                _context.Invitations.Remove(invitation);
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
