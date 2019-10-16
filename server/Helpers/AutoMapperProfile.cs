using System.Linq;
using AutoMapper;
using server.Dtos;
using server.Models;

namespace server.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<Organization, OrganizationForListDto>()
                .ForMember(x => x.Users, opt => opt.Ignore());
        }
    }
}
